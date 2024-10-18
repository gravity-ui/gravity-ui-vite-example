import {AsideHeader} from '@gravity-ui/navigation';
import {Ghost} from '@gravity-ui/icons';

import {InfoButtons} from './components/InfoButtons';
import {Wrapper} from './components/Wrapper';

const App = () => {
    return (
        <AsideHeader
            logo={{icon: Ghost, text: 'vite-example'}}
            compact={true}
            hideCollapseButton={true}
            renderContent={() => (
                <Wrapper>
                    <InfoButtons />
                </Wrapper>
            )}
        />
    );
};

export default App;
