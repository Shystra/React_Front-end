import { SectionContainer } from '.';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Reiciendis amet minus quas ducimus vel a
                    quisquam aliquam ad, consequuntur obcaecati earum
                    officiis explicabo, facere aperiam, officia voluptate
                    odio in atque.
                </p>
            </div>
        ),
    },
    argTypes: {
        children: {
            type: 'string'
        },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>
    );
};