import './styles.css';
import { HomeLinks } from './HomeLinks';
import { Overlay } from '../../components/Overlay/Overlay';

export function Home(): JSX.Element {
    return (
        <section className='home'>
            <Overlay opacity={0.5} className='home__overlay'>
                <h1 className='home__title'>Top Quiz</h1>
                <p className='home__slogan'>
                    Your platform <br /> for online exams
                </p>
                <HomeLinks />
            </Overlay>
        </section>
    );
}