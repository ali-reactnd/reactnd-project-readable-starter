import React from 'react';
import PropTypes from 'prop-types';
import SortMenu from '../Components/SortMenu';
import ContentsList from '../Components/ContentsList';
import CategoryBar from '../Components/CategoryBar';
import { Grid } from 'semantic-ui-react';
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
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
};

export default CategoryView;