import {useParams} from "react-router-dom";
import useFetch from "react-fetch-hook";
import { Descriptions } from 'antd';
import { Card } from 'antd';


export const DogInformationPage = () => {
    let { id } = useParams();
    const { isLoading, data, error } = useFetch("https://api.thedogapi.com/v1/breeds/" + id);
    if(!isLoading){
        return(
            <Card 
            cover={<img alt="doogg" src={'https://cdn2.thedogapi.com/images/' + data.reference_image_id + '.jpg'}/>}
            style={{ width: 240, display: 'inline-block', margin: 20 }}>
                <h3>{'Name: ' + data.name}</h3>
                <h3>{'Weight: ' + data.weight.metric + ' kg'}</h3>
                <h3>{'Height: ' + data.height.metric + ' cm'}</h3>
                <h3>{'Life span: ' + data.life_span}</h3>
            </Card>
        )
    }
}