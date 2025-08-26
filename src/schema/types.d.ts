type Property = {
   name: string;
   description: string;
   location : string;
   image: string;
   minInvestmentAmount: number;
   expectedReturn: number;
   fundedPercentage: number;
   investmentType: string;
   fundingDetail :{
      startDate: string;
      endDate: string;
      tenure: string;
      totalAmount: number;
   }
}