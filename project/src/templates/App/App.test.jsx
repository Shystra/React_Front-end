import Home from '.';
import {renderTheme} from '../../styles/render_theme';
import { mockBase } from '../Base/mock';
import { Base } from '.'


describe('<Home />', () => {
  it("should render home", () => {
    renderTheme(<Home/>)
  })
})