import { Footer } from '.';

export default {
    title: 'Footer',
    component: Footer,
    args: {
        footerHtml: `<p><a href="https://github.com/Shystra">Made by Lucas</a></p>`,
    },
};

export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    );
};