export const PROMOTIONS = [
    {
        id: 0,
        name: "Mountain Adventure",
        image: "/assets/images/breadcrumb-trail.jpg",
        featured: true,
        description:
            "Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.",
    },
];

class Main extends Component {
    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    campsite={
                        this.props.campsites.campsites.filter(
                            (campsite) => campsite.featured
                        )[0]
                    }
                    campsitesLoading={this.props.campsites.isLoading}
                    campsitesErrMess={this.props.campsites.errMess}
                    promotion={
                        this.props.promotions.promotions.filter(
                            (promotion) => promotion.featured
                        )[0]
                    }
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrMess={this.props.promotions.errMess}
                    partner={
                        this.props.partners.filter(
                            (partner) => partner.featured
                        )[0]
                    }
                />
            );
        };
    }
}
