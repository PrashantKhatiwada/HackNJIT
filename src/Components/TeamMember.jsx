import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  const TeamMember = ({ name, image, description }) => {
   return (
     <Card className="mt-5 w-80 flex flex-column gap-1 border-0 p-10 shadow-md shadow-black rounded-lg hover:scale-105">
       <CardHeader color="blue-gray" className="relative h-56">
         <img className="w-40 h-41" src={image} alt="card-image" />
       </CardHeader>
       <CardBody className="mx-3 mb-3">
         <Typography variant="h5" color="blue-gray" className="mb-2">
           {name}
         </Typography>
         <Typography>{description}</Typography>
       </CardBody>
       <CardFooter className="pt-0 mx-3">
         <Button>Read   
  More</Button>
       </CardFooter>
     </Card>   
 
   );
 };
  
  export default TeamMember;