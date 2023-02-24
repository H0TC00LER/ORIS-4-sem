import useFetch from "react-fetch-hook";
import { DogCard } from '../components/dogCard';

export const DogsListPage = () => {
    const { isLoading, data, error } = useFetch("https://api.thedogapi.com/v1/breeds");
    if (!isLoading){
        const listOfCards = data.map(breed =>  DogCard(breed));
        return(<>
            {listOfCards}
        </>);
    }
}


