import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {children:(
        
            <div>
                <h1>SectionBackground</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Reiciendis amet minus quas ducimus vel a
                    quisquam aliquam ad, consequuntur obcaecati earum
                    officiis explicabo, facere aperiam, officia voluptate
                    odio in atque.
                </p>
            </div>
        
    )},
    argTypes: {
        children: {type: ''},
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionBackground {...args} />
        </div>
    );
};