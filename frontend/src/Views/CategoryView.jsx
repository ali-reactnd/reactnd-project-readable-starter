import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import SortMenu from '../Components/SortMenu';
import ContentsList from '../Components/ContentsList';
import CategoryBar from '../Components/CategoryBar';
import AddNewContentLink from '../Components/AddNewContentLink';

const CategoryView = (props) => {
    let { posts, categories } = props;
    const category = props.match.params.category;
    posts = posts.filter(post => post.category===category);

    return (
        <div>
            <Grid centered>
                <CategoryBar categories={categories} />
                <SortMenu />
            </Grid>
            <ContentsList contents={posts} contentType="post"/>
            <AddNewContentLink path={`/create/${category}/post`} contentType="post" />
        </div>
    );
}

CategoryView.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            timestamp: PropTypes.number.isRequired,
            title: PropTypes.string,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            category: PropTypes.string,
            voteScore: PropTypes.number.isRequired,
            commentCount: PropTypes.number,
            deleted: PropTypes.bool.isRequired
        })
    ).isRequired
};

export default CategoryView;