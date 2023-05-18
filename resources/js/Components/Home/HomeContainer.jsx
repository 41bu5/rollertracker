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
            <RoundLargeButton icon={'X'} text={'Información'} page={'/informacion'} />
            <RoundLargeButton icon={'X'} text={'Plataforma'} page={'/espacio-personal'} />
            <RoundLargeButton icon={'X'} text={'Busca un club'} page={'/encuentra-clubes'} />
        </div>
    )
}