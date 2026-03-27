
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Header from './Header';
import useNowPLayingMovies from './Hooks/useNowPlayingMovies';
import usePopularMovies from './Hooks/usePopularMovies';
import useTopRatedMovies from './Hooks/useTopRatedMovies';
import useUpcomingMovies from './Hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

 useNowPLayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? ( <GptSearch /> ):( 
        <>
        <MainContainer />
        <SecondaryContainer /> 
       </>
      )}
      
     
      

      {/* 
          -MainContanier
             -VideoBackground
             -VideoTitle
          -SecondaryContainer
             -MoviesList * n
             -Cards * n   
      */}
    </div>
  )
}

export default Browse