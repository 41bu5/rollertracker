import { RoundLargeButton } from '@/Components/Buttons/RoundLargeButton';

export default function HomeContainer() {
    return (
        <div className='flex justify-between max-w-screen'>
            <RoundLargeButton icon={'X'} text={'Información'} page={'/dashboard'} />
            <RoundLargeButton icon={'X'} text={'Plataforma'} page={'/dashboard'} />
            <RoundLargeButton icon={'X'} text={'Busca un club'} page={'/dashboard'} />
        </div>
    )
}