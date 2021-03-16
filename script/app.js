//definition of my component
class DogsGenerator extends React.Component{
    //my DATA
    constructor(props){
        super(props);
        //stored data
        this.state = {
            message : 'https://images.dog.ceo/breeds/puggle/IMG_075427.jpg'
        }
    }

    async handleClick(){
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        // convert
        const dogsRes = await res.json();
        // extract
        const aDog = dogsRes;
        console.log(aDog);
        // update the data
        this.setState(() => ({
          message: aDog.message,
        }));
    }

    render(){
        return (
            <div>
              <img id="img" className={this.state.message} src={this.state.message} />
              <button className={this.state.message}
                onClick={() => this.handleClick()}>
                    Adopt a Dog
              </button>
            </div>
          );
    }

}
ReactDOM.render(<DogsGenerator />, document.querySelector('#dogs'));



/*class SummaryGenerator extends React.Component{
    constructor(props){
        super(props);
        //stored data
        this.state = {
            offset = '',
            limit = '' ,
            endOfRecords = '',
            count = '',
        }
    }

    async handleClick(){
        const res = await fetch('https://api.gbif.org/v1/occurrence/search?year=1800,1899');
        // convert
        const summaryRes = await res.json();
        // extract
        const sum = summaryRes.results;
        console.log(sum);
        // update the data
        this.setState(() => ({
          message: sum.message,
        }));
    }

    render(){
        return (
            <div>
              <img id="img" className={this.state.message} src={this.state.message} />
              <button className={this.state.message}
                onClick={() => this.handleClick()}>
                    Adopt a Dog
              </button>
            </div>
          );
    }
}

ReactDOM.render(<SummaryGenerator />, document.querySelector('#summary'));*/