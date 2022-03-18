export interface IService {
    site_id: string;
    country_default_time_zone: string;
    paging: Paging;
    results: IResult[];
    sort: Country;
    available_sorts: Country[];
    filters: Filter[];
    available_filters: Availablefilter[];
}

interface Availablefilter {
    id: string;
    name: string;
    type: string;
    values: Value3[];
}

interface Value3 {
    id: string;
    name: string;
    results: number;
}

interface Filter {
    id: string;
    name: string;
    type: string;
    values: Value2[];
}

interface Value2 {
    id: string;
    name: string;
    path_from_root: Country[];
}

export interface IResult {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price?: any;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    pictures: Picture[];
    accepts_mercadopago: boolean;
    installments: Installments;
    address: Address;
    shipping: Shipping;
    seller_address: Selleraddress;
    attributes: Attribute[];
    original_price?: number;
    category_id: string;
    channels: string[];
    official_store_id?: number;
    domain_id: string;
    catalog_product_id?: string;
    tags: string[];
    catalog_listing?: boolean;
    use_thumbnail_id: boolean;
    offer_score?: any;
    offer_share?: any;
    match_score?: any;
    winner_item_id?: any;
    melicoin?: any;
    order_backend: number;
    differential_pricing?: Differentialpricing;
}

interface Differentialpricing {
    id: number;
}

interface Attribute {
    id: string;
    name: string;
    values: Value[];
    attribute_group_name: string;
    value_id?: string | string;
    value_name?: string | string;
    value_struct?: (Struct | null)[];
    attribute_group_id: string;
    source: number;
}

interface Value {
    struct?: (Struct | null)[];
    source: number;
    id?: string | string;
    name?: string | string;
}

interface Struct {
    number: number;
    unit: string;
}

interface Selleraddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: Country;
    state: Country;
    city: City;
    latitude: string;
    longitude: string;
}

interface City {
    id?: string;
    name: string;
}

interface Country {
    id: string;
    name: string;
}

interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
}

interface Address {
    state_id: string;
    state_name: string;
    city_id?: string;
    city_name: string;
}

interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

interface Prices {
    id: string;
    prices: Price[];
    presentation: Presentation;
    payment_method_prices: any[];
    reference_prices: (Referenceprice | Referenceprices2 | Referenceprices3)[];
    purchase_discounts: any[];
}

interface Referenceprices3 {
    id: string;
    type: string;
    conditions: Conditions4;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags: any[];
    last_updated: string;
}

interface Conditions4 {
    context_restrictions: string[];
    start_time: string;
    end_time: string;
    eligible: boolean;
}

interface Referenceprices2 {
    id: string;
    type: string;
    conditions: Conditions3;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags: any[];
    last_updated: string;
}

interface Conditions3 {
    context_restrictions: string[];
    start_time?: any;
    end_time?: any;
    eligible: boolean;
}

interface Referenceprice {
    id: string;
    type: string;
    conditions: Conditions2;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags: any[];
    last_updated: string;
}

interface Conditions2 {
    context_restrictions: string[];
    start_time?: string;
    end_time?: string;
    eligible: boolean;
}

interface Presentation {
    display_currency: string;
}

interface Price {
    id: string;
    type: string;
    amount: number;
    regular_amount?: (null | number)[];
    currency_id: string;
    last_updated: string;
    conditions: Conditions;
    exchange_rate_context: string;
    metadata: Metadata;
}

interface Metadata {
    campaign_id?: string;
    promotion_id?: string;
    promotion_type?: string;
    discount_meli_amount?: number;
    campaign_discount_percentage?: number;
    campaign_end_date?: string;
    order_item_price?: number;
}

interface Conditions {
    context_restrictions: (string | string)[];
    start_time?: (null | string)[];
    end_time?: (null | string)[];
    eligible: boolean;
}

interface Seller {
    id: number;
    permalink: string;
    registration_date: string;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: string[];
    eshop?: Eshop;
    seller_reputation: Sellerreputation;
}

interface Sellerreputation {
    power_seller_status: string;
    level_id: string;
    metrics: Metrics;
    transactions: Transactions;
    real_level?: string;
    protection_end_date?: string;
}

interface Transactions {
    canceled: number;
    period: string;
    total: number;
    ratings: Ratings;
    completed: number;
}

interface Ratings {
    negative: number;
    neutral: number;
    positive: number;
}

interface Metrics {
    cancellations: Cancellations;
    claims: Cancellations;
    delayed_handling_time: Cancellations;
    sales: Sales;
}

interface Sales {
    period: string;
    completed: number;
}

interface Cancellations {
    period: string;
    rate: number;
    value: number;
    excluded?: Excluded;
}

interface Excluded {
    real_value: number;
    real_rate: number;
}

interface Eshop {
    seller: number;
    eshop_rubro?: any;
    eshop_id: number;
    nick_name: string;
    site_id: string;
    eshop_logo_url: string;
    eshop_status_id: number;
    eshop_experience: number;
    eshop_locations: any[];
}

interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

interface Picture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}
