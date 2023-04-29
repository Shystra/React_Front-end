import { TextComponent } from '.';

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Fuga nam modi aspernatur fugiat, 
        magni sapiente soluta nihil fugit et quibusdam esse qui vero
        corporis? Deleniti velit architecto praesentium 
        voluptatibus. Laudantium!`,
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
            <TextComponent {...args} />
        </div>
    );
};