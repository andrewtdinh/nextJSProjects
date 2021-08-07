import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  return <section>
    <h1>Favorite Meetups</h1>
    <MeetupList meetups={favoritesCtx.favorites} />
  </section>;
}

export default FavoritesPage;
