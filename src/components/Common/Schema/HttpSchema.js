//schema
const null_schema = {
    type: "object",
    properties: {}
};
const balance_query_schema = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        asset: {
            type: "array",
            title: "Assets",
            items: { type: "string", default: "BTC" }
        }
    }
};
const balance_update_schema = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        asset: { type: "string", title: "Asset", default: "BTC" },
        business_type: {
            type: "string",
            title: "Business Type",
            default: "deposit"
        },
        business_id: { type: "integer", title: "Business Id", default: 1 },
        change: { type: "number", title: "Change", default: 1.5 }
    }
};
const balance_history_schema = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        asset: { type: "string", title: "Asset", default: "BTC" },
        business_type: {
            type: "string",
            title: "Business Type",
            default: "deposit"
        },
        start_time: { type: "integer", title: "Start Time", default: 0 },
        end_time: { type: "integer", title: "End Time", default: 0 },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
    }
};

const order_put_limit = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        market: { type: "string", title: "Market", default: "BTCBCH" },
        side: {
            type: "integer",
            title: "Side (1 ask, 2 bid)",
            enum: [1, 2],
            enumNames: ["Ask", "Bid"],
            default: 2
        },
        amount: { type: "number", title: "Amount", default: 1 },
        price: { type: "number", title: "Price", default: 8000 },
        taker_fee_rate: { type: "number", title: "Taker Fee Rate", default: 0.002 },
        maker_fee_rate: { type: "number", title: "Maker Fee Rate", default: 0.001 },
        source: { type: "string", title: "Source", default: "" }
    }
};

const order_put_market = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        market: { type: "string", title: "Market", default: "BTCBCH" },
        side: {
            type: "integer",
            title: "Side (1 ask, 2 bid)",
            enum: [1, 2],
            enumNames: ["Ask", "Bid"],
            default: 2
        },
        amount: { type: "number", title: "Amount", default: 1 },
        taker_fee_rate: { type: "number", title: "Taker Fee Rate", default: 0.002 },
        source: { type: "string", title: "Source", default: "" }
    }
};

const order_cancel = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        market: { type: "string", title: "Market", default: "BTCBCH" },
        order_id: { type: "integer", title: "Order Id", default: 1 }
    }
};
const order_deals = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "Order id", default: 1 },
        market: { type: "integer", title: "Off Set", default: 0 },
        order_id: { type: "integer", title: "Limit", default: 1 }
    }
};
const order_transactions = {
    type: "object",
    properties: {
        order_id: { type: "integer", title: "Order Id", default: 1 },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
    }
};
const order_book = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        side: {
            type: "integer",
            title: "Side (1 ask, 2 bid)",
            enum: [1, 2],
            enumNames: ["Ask", "Bid"],
            default: 2
        },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
    }
};

const order_depth = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        limit: { type: "integer", title: "Limit", default: 50 },
        interval: { type: "string", title: "Interval", default: "1" }
    }
};
const orders_pending = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        market: { type: "string", title: "Market", default: "BTCBCH" },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
    }
};
const order_pending_details = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        order_id: { type: "integer", title: "Order Id", default: 1 }
    }
};
const orders_completed = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        market: { type: "string", title: "Market", default: "BTCBCH" },
        start_time: { type: "integer", title: "Start Time", default: 1 },
        end_time: { type: "integer", title: "End Time", default: 120000000 },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 },
        side: {
            type: "integer",
            title: "Side (1 ask, 2 bid)",
            enum: [1, 2],
            enumNames: ["Ask", "Bid"],
            default: 2
        }
    }
};
const order_completed_details = {
    type: "object",
    properties: {
        order_id: { type: "integer", title: "Order Id", default: 1 }
    }
};

const market_price = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" }
    }
};
const market_history = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        limit: { type: "integer", title: "Limit", default: 50 },
        last_id: { type: "integer", title: "Last Id", default: 0 }
    }
};
const user_transaction_history = {
    type: "object",
    properties: {
        user_id: { type: "integer", title: "User Id", default: 1 },
        market: { type: "string", title: "Market", default: "BTCBCH" },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
    }
};
const kline = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        start_time: { type: "integer", title: "Start Time", default: 1 },
        end_time: { type: "integer", title: "End Time", default: 12000000 },
        interval: { type: "integer", title: "Interval", default: 3600 }
    }
};
const market_status = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        period: { type: "integer", title: "Period", default: 86400 }
    }
};
const market_status_today = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" }
    }
};


exports = {
    null_schema,
    balance_query_schema,
    balance_update_schema,
    balance_history_schema,
    order_put_limit,
    order_put_market,
    order_cancel,
    order_deals,
    order_transactions,
    order_book,
    order_depth,
    orders_pending,
    order_pending_details,
    orders_completed,
    order_completed_details,
    market_price,
    market_history,
    user_transaction_history,
    kline,
    market_status,
    market_status_today

}