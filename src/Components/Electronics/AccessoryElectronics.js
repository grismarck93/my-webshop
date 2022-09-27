
import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import AccessoryItem from "./ElectronicsItem/AccessoryItem";


  const AccessoryElectronics = () => {

        const [accessory, setAccessory] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [httpError, setHTTPError] = useState();

        useEffect(() => {
          const fetchAccessory = async () => {
            const response = await fetch ('https://my-first-react-project-dc0b1-default-rtdb.europe-west1.firebasedatabase.app/Electronics.json');

            if(!response.ok){
              throw new Error ('Haho something is dead!!');
            }

            const responseData = await response.json();

            const loadAccessory = [];

            for(const key in responseData){
              loadAccessory.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
              });
            }

            setAccessory(loadAccessory);
            setIsLoading(false);
          };

          fetchAccessory().catch((error) => {
            setIsLoading(false);
            setHTTPError(error.message);
          } );
        }, []);

        if(isLoading){
          return(
            <section >
              <p>Loading...</p>
          </section>
          )
        }
        
        if(httpError){
          return(
            <section >
              <p>{httpError}</p>
            </section>
          );
        };

        const accessoryList = accessory.map((acc) => 
        <AccessoryItem
            key={acc.id}
            name={acc.name}
            description={acc.description}
            price={acc.price}
        />
        );
        return(
            <Card style={{margin: 50, backgroundColor:"#00d4ff", }} >
                <ul>{accessoryList}</ul>
            </Card>
            
          );
  };
  


export default AccessoryElectronics;