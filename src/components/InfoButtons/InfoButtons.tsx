import React from 'react';
import block from 'bem-cn-lite';
import {Button, Icon} from '@gravity-ui/uikit';
import {BookOpen, CopyTransparent, ListUl, LogoTelegram} from '@gravity-ui/icons';
import Figma from '../../assets/icons/figma.svg?react';
import Storybook from '../../assets/icons/storybook.svg?react';
import GitHub from '../../assets/icons/github.svg?react';

import './InfoButtons.scss';

const b = block('info-buttons');

export const InfoButtons: React.FC = () => {
    return (
        <div className={b()}>
            <div className={b('block')}>
                <div className={b('title')}>About Gravity UI</div>
                <div className={b('buttons')}>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://gravity-ui.com/components/uikit"
                            target="_blank"
                        >
                            <Icon data={CopyTransparent} />
                            Components
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://gravity-ui.com/libraries"
                            target="_blank"
                        >
                            <Icon data={ListUl} />
                            Libraries
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://preview.gravity-ui.com/uikit/"
                            target="_blank"
                        >
                            <Icon data={Storybook} size={16} />
                            Storybook
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://github.com/gravity-ui"
                            target="_blank"
                        >
                            <Icon data={GitHub} size={16} />
                            GitHub
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)"
                            target="_blank"
                        >
                            <Icon data={Figma} size={18} />
                            Figma
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://t.me/gravity_ui"
                            target="_blank"
                        >
                            <Icon data={LogoTelegram} />
                            Telegram
                        </Button>
                    </div>
                </div>
            </div>

            <div className={b('block')}>
                <div className={b('title')}>About Vite</div>
                <div className={b('buttons')}>
                    <div className={b('button')}>
                        <Button size="l" view="outlined" href="https://vitejs.dev" target="_blank">
                            <Icon data={BookOpen} />
                            Docs
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
