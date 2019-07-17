import React, { Component } from 'react'
import Axios from 'axios'
import './News.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import { Typography } from '@material-ui/core';

class News extends Component {
    constructor() {
        super()
        console.log("constructor runs first")
        this.state = {
            news: []
            
        }
    }

    state = {
        news: []
    }

    componentDidMount() {
        console.log('once the component mounts (the render method completes), this function runs')
        Axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8644dea7986142a98ccb5fbf2d78ec29`)
            .then(res => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .catch(error => console.log(error))
    }
   



    render() {
        // console.log("render runs next, after the constructor")
        // console.log(this.state)
        return (
            <>
              
             
          { this.state.news.map(article => {

                   return<Card className="cards">
                            <Typography variant="h5" >{article.title} 
                            
                            {/* {article.publishedAt} */}
                            {/* {article.urlToImage} */}
                            <Divider />
                            </Typography>
                            
                                   
                                <CardContent>
                                    <Typography>
                                        {article.description}
                                    </Typography>
                                    <Divider />
                                </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="outlined" color="inherit" >Read More</Button>
                                        <Badge color="secondary" badgeContent={8} >
                                           <Button size="small" variant="outlined" color="secondary">Fake News</Button>
                                        </Badge>
                                    </CardActions>
                            </Card> 
                    
                    
                })}
          
            </>
        )
    }
}

export default News