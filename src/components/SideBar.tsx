import { Button } from '../components/Button';

interface sidebarProps {
  onChangeCategory: (id: number) => void;
  getSelectedGenreId: number;
  genres: Array<{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>
}

export function SideBar({ genres, getSelectedGenreId, onChangeCategory }: sidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onChangeCategory(genre.id)}
            selected={getSelectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}