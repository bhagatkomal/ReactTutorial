import seriesData from '../api/seriesData.json';
import { SeriesCard } from './SeriesCard';


const NetflixSeries = () => {

    return (
        <>
            <ul className='grid grid-three-cols'>
            {seriesData.map((data) => (
                <SeriesCard key={data.id} data={data} />
            ))}
            </ul>
            
        </>
    )
    
}

export default NetflixSeries;