// Definition of Custom component
class UserGenerator extends React.Component {
    // DATA
    constructor(props) {
      // props are custom attributs of the custom component
      super(props);
      // stored data
      this.state = {
        firstname: 'Igor',
        lastname: 'MARTY',
        email: 'ig.ma@r.ty',
        gender: 'male',
        picture:
          'https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/1935990_99281418515_7404813_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=3d-z-X46Wl0AX-dbb_E&_nc_ht=scontent.flux1-1.fna&oh=16739c8e2f4fbb3dc5575a4f11cec8fb&oe=60698EE4',
      };
    }
    // define the function
    // () => handleClick()
    // replace
    // doc.addEventListener(function(){handleClick()})
    // doc.addEventListener(() => {handleClick()})
    // doc.addEventListener(() => handleClick())
    async handleClick() {
      // alert(this.state.firstname);
      // call
      const res = await fetch('https://randomuser.me/api');
      // convert
      const jsonRes = await res.json();
      // extract
      const user = jsonRes.results[0];
      console.log(user);
      // update the data
      this.setState(() => ({
        firstname: user.name.first,
        lastname: user.name.last,
        gender: user.gender,
        email: user.email,
        picture: user.picture.large,
      }));
    }
    // Render is line the HTML
    render() {
      return (
        <div>
          <span>{this.props.type}</span>
          <img className={this.state.gender} src={this.state.picture} />
          <h1>
            {this.state.firstname} {this.state.lastname}
          </h1>
          <h2>{this.state.email}</h2>
          <button
            className={this.state.gender}
            onClick={() => this.handleClick()}
          >
            New User
          </button>
        </div>
      );
    }
  }
  // MUST HAVE line to inject our componentn in the page
  ReactDOM.render(<UserGenerator type="elit" />, document.querySelector('#app'));
  

  https://www.amiiboapi.com/api/