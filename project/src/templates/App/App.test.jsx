import Home from '.';
import {renderTheme} from '../../styles/render_theme';


describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
