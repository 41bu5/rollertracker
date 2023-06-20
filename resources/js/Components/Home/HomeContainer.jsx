import { RoundLargeButton } from '@/Components/Buttons/RoundLargeButton';

export default function HomeContainer() {
    return (
        <div className='flex
        flex-col
        h-auto
        lg:flex-row
        lg:justify-between
        max-w-screen
        text-center
        align-center'>
            <RoundLargeButton icon={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg>} text={'Información'} page={'/informacion'} />
            <RoundLargeButton icon={'X'} text={'Plataforma'} page={'/espacio-personal'} />
            <RoundLargeButton icon={'X'} text={'Busca un club'} page={'/encuentra-clubes'} />
        </div>
    )
}