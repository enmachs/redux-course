import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component {
  // state = {
  //   modalVisible: false,
  //   media: ''

  // }
  closeModal = (ev) => {
    this.props.actions.closeModal()
    // this.props
    // this.setState({
    //   modalVisible: !this.state.modalVisible,
    //   media
    // })
  }
  handleOpenModal = (id) => {
    this.props.actions.openModal(id)
  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
        	<Related/>
          
          <Categories
            categories={this.props.categories}
            openModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.closeModal}
              >
                <VideoPlayer
                  autoplay
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                />
              </Modal>
           	</ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}
// Función que se pasa por parámetro
// en el connect entre el estado y el componente
function mapStateToProps(state, props){
  const categories = state.get('data').get('categories').map((categoryId)=>{
    return state.get('data').get('entities').get('categories').get(categoryId)
  })
  let searchResult = list()
  const search = state.get('data').get('search')
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResult = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase()) || item.get('title').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  // Retorna solo las propiedades del store 
  // que se establezcan acá hacía el componente actual.
  return {
    categories: categories,
    search: searchResult,
    modal: state.get('modal')
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
// Conecta el store con el componente
export default connect(mapStateToProps, mapDispatchToProps)(Home)
