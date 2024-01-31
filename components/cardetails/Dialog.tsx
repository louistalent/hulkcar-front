import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const carData = [
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
];

export default function Dialog() {
  return (
    <div className="relative">
      <div className="px-3 py-5 absolute top-0">
        <h1 className="text-2xl md:font-semibold font-medium text-[#10141A] dark:text-[#FCFCFC]">Available Cars</h1>
      </div>
      <Table className="mt-16">
        <TableHeader>
          <TableRow className="border-b border-[#CDCED0] dark:border-[#424242]">
            <TableHead className="text-[#5B6169] dark:text-[#868686]">Car Model</TableHead>
            <TableHead className="text-[#5B6169] dark:text-[#868686]" >Date</TableHead>
            <TableHead className="text-[#5B6169] dark:text-[#868686]">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carData.map((carData, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="font-medium">
                <div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className=" rounded-full"
                        src={carData.image}
                        alt={carData.alt}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-[#10141A] dark:text-[#FCFCFC]">
                        {carData.brand}
                      </div>
                      <div className="text-sm text-[#5B6169] dark:text-[#868686] font-semibold">
                        {carData.model}
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-[#5B6169]  dark:text-[#868686] font-medium">{carData.date}</TableCell>
              <TableCell className="text-[#10141A] dark:text-[#FCFCFC] font-medium ">{carData.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
