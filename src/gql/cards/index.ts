import { gql } from '../__generated__';

const CARDS_QUERY = gql(/* GraphQL */ `
    query cards($filters: CardsFilters, $pagination: Pagination) {
        cards(filters: $filters, pagination: $pagination) {
            id
            name
            image
            stage
            description
            types
            attacks {
                name
                damage
                effect
            }
            weaknesses {
                type
                value
            }
        }
    }
`);

export default CARDS_QUERY;
