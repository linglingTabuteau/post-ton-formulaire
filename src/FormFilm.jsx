import React, {Component} from 'react';
import './FormFilm.css';

class FormFilm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            poster:'',
            comment:'',
        };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    }

    onChange(e){
        this.setState({
          // [e.target.name] faut mettre le meme nom de name que le nom du state  
          // [e.target.name] représente un objet dynamique qui contient ces 3 propriétés lastname, firstname, email.
            [e.target.name]:e.target.value,
        });
    }

    submitForm(e){
        // annuler le compotement par défaut de Event de onSubmit (qui va raffraichir la page)
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // body : contient tout (this.state) les le contenu qui sera envoyé 
            body: JSON.stringify(this.state),
           };
           const url = " http://92.175.11.66:3001/api/quests/movies/";
           
           fetch(url, config)
           .then(res => res.json())
          //  res répresent id 
            .then(res => {
              if (res.error) {
                alert(res.error);
              } else {
                alert(`Employé ajouté avec l'ID ${res}!`);
              }
            }).catch(e => {
              console.error(e);
              alert('Erreur lors de l\'ajout d\'un film');
            });
    }

render(){
    return(
           <div className="FormFilm">
            <h1>Votre Film Préféré </h1>
           
            <form onSubmit={this.submitForm}>
              <fieldset>
                <legend>Informations Film</legend>
                <div className="form-data">
                  <label htmlFor="name">Nom du film</label>
                  <input
                   required
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                </div>
           
                <div className="form-data">
                  <label htmlFor="poster">Lien du film</label>
                  <input
                   required
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                  />
                </div>
           
                <div className="form-data">
                  <label htmlFor="comment">Comment</label>
                  <textarea
                  required
                    type="textarea"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                    class='size'
                  />
                </div>
                <div className="form-data">
                  <input type="submit" value="Envoyer" />
                </div>
              </fieldset>
            </form>
           </div>
    );

}
    
}

export default FormFilm;