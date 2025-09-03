"use client";

import { useState } from "react";
import { Button } from "@/frontend/core/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/frontend/core/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/frontend/pricing/domain/pricingData";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our pricing
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openFaq === index}
              onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-6 h-auto text-left bg-white hover:bg-gray-50 border rounded-lg"
                >
                  <span className="font-semibold text-gray-900 break-words whitespace-normal">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
