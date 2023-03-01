import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useMemo,
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
  getPhoneTypeByPathName: (pathName: string) => string
}

export const CompaniesContext = createContext({} as CompaniesContextModel)

export const CompaniesProvider = ({ children }: CompaniesProviderProps) => {
  const [companies, setCompanies] = useState<CompaniesApi[]>()
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumbersApi[]>()

  const COMPANIES_URL = 'http://localhost:3000/companies'
  const PHONE_NUMBERS_URL = 'http://localhost:3000/phone_numbers'

  const fetchData = async () => {
    try {
      const [companiesResponse, phoneNumbersResponse] = await Promise.all([
        fetch(COMPANIES_URL),
        fetch(PHONE_NUMBERS_URL),
      ])
      const [companiesData, phoneNumbersData] = await Promise.all([
        companiesResponse.json(),
        phoneNumbersResponse.json(),
      ])
      setCompanies(companiesData)
      setPhoneNumbers(phoneNumbersData)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getPhoneNumbersByPathName = useMemo(() => {
    return (pathName: string) => {
      const companyId = pathName.slice(9)
      return phoneNumbers?.filter(
        (phoneNumber) => phoneNumber.company_id === Number(companyId),
      )
    }
  }, [phoneNumbers])

  const getCompanyNameByPathName = useMemo(() => {
    return (pathName: string) => {
      const companyId = pathName.slice(9)
      const company = companies?.filter(
        (company) => company.id === Number(companyId),
      )
      return company ? company[0].name : ''
    }
  }, [companies])

  const getPhoneTypeByPathName = useMemo(() => {
    return (pathName: string) => {
      const phoneNumberId = pathName.slice(8)
      const phoneNumber = phoneNumbers?.filter(
        (item) => item.id === phoneNumberId,
      )
      return phoneNumber ? phoneNumber[0].type : ''
    }
  }, [phoneNumbers])

  const value = {
    companies,
    getPhoneNumbersByPathName,
    getCompanyNameByPathName,
    getPhoneTypeByPathName,
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
