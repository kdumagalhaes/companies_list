import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

interface CompaniesProviderProps {
  children: ReactNode
}

interface CompaniesApi {
  id: number
  name: string
  vatin: string
}

interface PhoneNumbersApi {
  id: string
  type: string
  company_id: number
}

interface CompaniesContextModel {
  companies: CompaniesApi[] | undefined
  getPhoneNumbersByPathName: (pathName: string) => PhoneNumbersApi[] | undefined
  getCompanyNameByPathName: (pathName: string) => string
}

export const CompaniesContext = createContext({} as CompaniesContextModel)

export const CompaniesProvider = ({ children }: CompaniesProviderProps) => {
  const [companies, setCompanies] = useState<CompaniesApi[]>()
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumbersApi[]>()

  const COMPANIES_URL = 'http://localhost:3000/companies'
  const PHONE_NUMBERS_URL = 'http://localhost:3000/phone_numbers'

  const fetchCompanies = async () => {
    try {
      const response = await fetch(COMPANIES_URL)
      const data = await response.json()
      setCompanies(data)
    } catch (error) {
      console.warn(error)
    }
  }

  const fetchNumbers = async () => {
    try {
      const response = await fetch(PHONE_NUMBERS_URL)
      const data = await response.json()
      setPhoneNumbers(data)
    } catch (error) {
      console.warn(error)
    }
  }

  const getPhoneNumbersByPathName = (pathName: string) => {
    const companyId = pathName.slice(9)
    return phoneNumbers?.filter(
      (phoneNumber) => phoneNumber.company_id === Number(companyId),
    )
  }

  const getCompanyNameByPathName = (pathName: string) => {
    const companyId = pathName.slice(9)
    const company = companies?.filter(
      (company) => company.id === Number(companyId),
    )
    return company ? company[0].name : ''
  }

  useEffect(() => {
    fetchCompanies()
    fetchNumbers()
  }, [])

  const value = {
    companies,
    getPhoneNumbersByPathName,
    getCompanyNameByPathName,
  }

  return (
    <CompaniesContext.Provider value={value}>
      {children}
    </CompaniesContext.Provider>
  )
}

export const useCompanies = () => {
  const context = useContext(CompaniesContext)

  if (context === undefined) {
    throw new Error('useCompanies must be used within CompaniesContext.')
  }

  return context
}
