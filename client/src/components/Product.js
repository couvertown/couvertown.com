import React, { Component } from "react";

export default class ProductTile extends Component {
    render() {
        return (
            <div class="productTile" key={this.props.shortname}>
                <h2><a href={this.props.shortname}>{this.props.name}</a></h2>
                <p>{this.props.description}</p>
                <p><small>CAD ${this.props.price}</small></p>
            </div>
        );
    }
}

export class ProductDetail extends Component  {
    render() {
        let description = this.props.longDescription == null ? this.props.description : this.props.longDescription;
        return (
            <div class="productDetail" key={this.props.shortname}>
            <h1>{this.props.name}</h1>
            <p>{description}</p>
            <span>CAD ${this.props.price}</span>
            </div>
        )
    }
}
