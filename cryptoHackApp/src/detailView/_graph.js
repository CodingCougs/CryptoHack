import Graph from './graph';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function mapStateToProps(state){
    return {
        app: state.containers.BaseAppReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        
    }, dispatch)
}

export const GraphContainer = connect(mapStateToProps, mapDispatchToProps)(Graph);