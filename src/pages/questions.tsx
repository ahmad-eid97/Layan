import { useTranslation } from "react-i18next"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getFaqs } from "@/data/api"
import { useLocalized } from "@/hooks/use-localized"

export default function QuestionsPage() {
  const { t } = useTranslation("common")
  const localized = useLocalized()
  const faqs = getFaqs()

  return (
    <>
      <PageHeader title={t("questions.title")} />

      <section className="container mx-auto max-w-3xl px-4 py-12">
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={String(faq.id)}
                className="bg-background rounded-xl border px-5 last:border-b"
              >
                <AccordionTrigger className="text-start font-bold">
                  {localized(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {localized(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </>
  )
}
