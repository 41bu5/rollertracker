import { RoundLargeButton } from '@/Components/Buttons/RoundLargeButton';

export default function HomeContainer() {
    return (
        <div className='flex sm:flex-col
        sm:h-auto
        sm:align-top
        sm:justify-center
        max-sm:flex-col
        max-sm: h-auto
        justify-between max-w-screen
        text-center'>
            <RoundLargeButton icon={'X'} text={'Información'} page={'/dashboard'} />
            <RoundLargeButton icon={'X'} text={'Plataforma'} page={'/dashboard'} />
            <RoundLargeButton icon={'X'} text={'Busca un club'} page={'/dashboard'} />
        </div>
    )
}