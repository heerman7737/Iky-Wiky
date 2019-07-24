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
import Slide from '@material-ui/core/Slide';
// import { throws } from 'assert';


class News extends Component {
    
    constructor() {
        super()
        this.state = {
            news: [],
            isOpen: false,
            articleIndex: 0
        }
        this.openArticle = this.openArticle.bind(this)
    }

    componentDidMount() {
        Axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8644dea7986142a98ccb5fbf2d78ec29`)
            .then(res => {
                this.setState({ news: res.data.articles })
            })
            .catch(error => console.log(error))
    }

    openArticle(index) {
        this.setState({
            isOpen: true,
            articleIndex: index
        })
        console.log(this.state.articleIndex)
        console.log(this.state.articleIndex.url)
        console.log(this.state.news)
    }
   
    render() {
        const { news, articleIndex } = this.state
        // console.log(this.state.news)
        return (
            <>
          { news.map((article, index) => {
                   return (
                   <Card className="cards">
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
                                        <Button size="small" variant="outlined" color="inherit" onClick={(e)=>this.openArticle(index)}>Read More
                                        </Button>
                                        <Badge color="secondary" badgeContent={8} >
                                           <Button size="small" variant="outlined" color="secondary">Fake News</Button>
                                        </Badge>
                                        
                                    </CardActions>
                   </Card>
                   ) 
                    
                    })}
            {news[articleIndex] &&
           
            <Dialog 
                isOpen={this.state.isOpen}
                onClose={(e) => this.setState({ isOpen:false })}>
                <iframe title="full-article" 
                src={news[articleIndex].url} width="500px" 
                height="525px" allowfullscreen="allowfullscreen"></iframe>
                <Button 
                style={{background:'linear-gradient(45deg, #589d62 30%, #B0D3BF 90%)' , marginTop:"3px"}} 
                href={news[articleIndex].url}>Go to Article Website</Button>
            </Dialog>
            
            }
          
            </>
        )
    }
}

export default News