import React, { Component } from 'react'
import Axios from 'axios'
import './News.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import { Typography} from '@material-ui/core';
import Dialog from './Dialog'

class News extends Component {
    constructor() {
        super()
        this.state = {
            news: [],
            isOpen: false
        }
    }

    state = {
        news: []
    }

    componentDidMount() {
        Axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8644dea7986142a98ccb5fbf2d78ec29`)
            .then(res => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .catch(error => console.log(error))
    }
   


    render() {
        return (
            <>
          { this.state.news.map(article => {
                   return<Card className="cards">
                            <Typography variant="h5" key={article}>{article.title} 
                            
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
                                        <Button size="small" variant="outlined" color="inherit" onClick={(e) => this.setState({ isOpen:true })}>Read More</Button>
                                        <Dialog isOpen={this.state.isOpen}
                                        onClose={(e) => this.setState({ isOpen:false })}>
                                        <iframe title="full-article" src={article.url} width="500" height="400" allowfullscreen="allowfullscreen"></iframe>
                                        </Dialog>
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