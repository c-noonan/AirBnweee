import { connect } from 'react-redux';
import { createNewUser, login } from "../../actions/session";
import Signup from './signup';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  login: (formUser) => dispatch(login(formUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
