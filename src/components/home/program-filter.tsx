import { Search } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  getCountries,
  getDegrees,
  getSpecialties,
  getStudyLanguages,
  getUniversities,
} from "@/data/api"
import type { LocalizedText } from "@/data/types"
import { useLocalized } from "@/hooks/use-localized"

interface FilterSelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ id: number; name: LocalizedText }>
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  const localized = useLocalized()
  return (
    <div className="space-y-1.5">
      <span className="text-sm font-medium">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.id} value={String(option.id)}>
              {localized(option.name)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function ProgramFilter() {
  const { t } = useTranslation("common")
  const navigate = useNavigate()

  const [countryId, setCountryId] = useState("")
  const [universityId, setUniversityId] = useState("")
  const [degreeId, setDegreeId] = useState("")
  const [specialtyId, setSpecialtyId] = useState("")
  const [languageId, setLanguageId] = useState("")

  const universities = getUniversities(
    countryId ? { countryId: Number(countryId) } : undefined
  )

  const search = () => {
    const params = new URLSearchParams()
    if (countryId) params.set("country", countryId)
    if (universityId) params.set("university", universityId)
    if (degreeId) params.set("degree", degreeId)
    if (specialtyId) params.set("specialty", specialtyId)
    if (languageId) params.set("language", languageId)
    navigate(`/programs-filter?${params.toString()}`)
  }

  return (
    <section className="relative z-10 container mx-auto -mt-6 px-4 pb-4 md:-mt-12">
      <Card className="bg-background/80 border-primary/10 shadow-primary/5 rounded-2xl shadow-2xl backdrop-blur-xl">
        <CardContent className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-6">
          <FilterSelect
            label={t("home.country")}
            value={countryId}
            onChange={(v) => {
              setCountryId(v)
              setUniversityId("")
            }}
            options={getCountries()}
          />
          <FilterSelect
            label={t("home.university")}
            value={universityId}
            onChange={setUniversityId}
            options={universities}
          />
          <FilterSelect
            label={t("home.degree")}
            value={degreeId}
            onChange={setDegreeId}
            options={getDegrees()}
          />
          <FilterSelect
            label={t("home.speciality")}
            value={specialtyId}
            onChange={setSpecialtyId}
            options={getSpecialties()}
          />
          <FilterSelect
            label={t("home.lang")}
            value={languageId}
            onChange={setLanguageId}
            options={getStudyLanguages()}
          />
          <div className="flex items-end">
            <Button onClick={search} className="w-full gap-2" size="lg">
              <Search className="size-4" />
              {t("home.search")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
