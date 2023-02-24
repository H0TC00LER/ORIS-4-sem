import { Card } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;

export const DogCard = (breed) =>
     <a href={breed.id} key={breed.id}>
        <Card 
            hoverable
            cover={<img alt="wat da dog doin" 
            src={breed.image.url}/>}
            style={{ width: 240, display: 'inline-block', margin: 20 }}>
            <Meta title={breed.name}/>
        </Card>
    </a>