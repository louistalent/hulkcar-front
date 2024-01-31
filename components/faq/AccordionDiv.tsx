import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {Urbanist} from 'next/font/google'

const urbanist = Urbanist({
  subsets: ["latin"],
})

const AccordionDiv = () => {
  return (
    <div className={
      cn("sm:w-4/5 w-full sm:mt-0 mt-10", urbanist.className)
    }>
      <Accordion type="single" collapsible>
        {accordions.map((accordion, index) => {
          return (
            <div key={index}>
              <AccordionItem value={`value ${index}`} 
              
              >
                <AccordionTrigger className="dark:text-slate-50 text-black font-light ">{accordion.title}</AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-4 lg:pb-8">{accordion.content}</AccordionContent>
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionDiv;

const accordions = [
  {
    id: 1,
    title: "How can I connect the wallet ?",
    content:
      "You can connect your wallet by clicking on the connect wallet button on the top right corner of the page.",
  },
  {
    id: 2,
    title: "Which wallet to use ?",
    content:
      "You can connect your wallet by clicking on the connect wallet button on the top right corner of the page.",
  },
  {
    id: 3,
    title: "Which blockchain do you use ?",
    content:
      "You can connect your wallet by clicking on the connect wallet button on the top right corner of the page.",
  },
  {
    id: 4,
    title: "How buy a NFT ?",
    content:
      "You can connect your wallet by clicking on the connect wallet button on the top right corner of the page.",
  },
  {
    id: 5,
    title: "How much does an NFT earn me ?",
    content:
      "You can connect your wallet by clicking on the connect wallet button on the top right corner of the page.",
  },
  {
    id: 6,
    title: "Does an NFT gives me access to a VIP group ?",
    content:
      "You can connect your wallet by clicking on the connect wallet button on the top right corner of the page.",
  },
  {
    id: 7,
    title: "How do I resell my NFT?",
    content:
      "You can connect your wallet by clicking on the connect wallet button on the top right corner of the page.",
  },

];
