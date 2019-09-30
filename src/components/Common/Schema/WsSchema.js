
const ws_auth_schema = {
    type: "object",
    properties: {
        token: { type: "string", title: "Token", default: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" },
        source: { type: "string", title: "Source", default: "" }
    }
};
const ws_sign_schema = {
    type: "object",
    properties: {
        access_id: { type: "string", title: "Access ID", default: "<ACCESS_ID>" },
        authorization: {
            type: "string",
            title: "Authorisation",
            default: "<AUTHORISATION>"
        },
        tonce: { type: "integer", title: "Tonce", default: 1 }
    }
};
const ws_kline_query_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        start: { type: "integer", title: "Start", default: 1 },
        end: { type: "integer", title: "End", default: 120000000 },
        interval: { type: "integer", title: "Interval", default: 3600 }
    }
};
const ws_kline_subscribe_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        interval: { type: "integer", title: "Interval", default: 3600 }
    }
};
const ws_price_query_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" }
    }
};
const ws_price_subscribe_schema = {
    type: "object",
    properties: {
        markets: {
            type: "array",
            title: "Markets",
            items: { type: "string", default: "BTCBCH" }
        }
    }
};
const ws_today_query_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" }
    }
};
const ws_today_subscribe_schema = {
    type: "object",
    properties: {
        markets: {
            type: "array",
            title: "Markets",
            items: { type: "string", default: "BTCBCH" }
        }
    }
};
const ws_deals_query_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        limit: { type: "integer", title: "Limit", default: 50 },
        last_id: { type: "integer", title: "Last ID", default: 0 }
    }
};
const ws_deals_subscribe_schema = {
    type: "object",
    properties: {
        markets: {
            type: "array",
            title: "Markets",
            items: { type: "string", default: "BTCBCH" }
        }
    }
};
const ws_depth_query_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        limit: { type: "integer", title: "Limit", default: 50 },
        interval: { type: "string", title: "Interval", default: "0" }
    }
};
const ws_depth_subscribe_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        limit: { type: "integer", title: "Limit", default: 50 },
        interval: { type: "string", title: "Interval", default: "0" }
    }
};
const ws_order_query_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
    }
};
const ws_order_history_schema = {
    type: "object",
    properties: {
        market: { type: "string", title: "Market", default: "BTCBCH" },
        start_time: { type: "integer", title: "Start Time", default: 0 },
        end_time: { type: "integer", title: "End Time", default: 0 },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
        //side: {type: "integer", title: "Side (0 - all, 1 - ask, 2 - bid)", default: 0},
    }
};
const ws_asset_query_schema = {
    type: "object",
    properties: {
        asset: {
            type: "array",
            title: "Assets",
            items: { type: "string", default: "BTC" }
        }
    }
};
const ws_asset_history_schema = {
    type: "object",
    properties: {
        asset: { type: "string", title: "Asset", default: "BTC" },
        //business: {type: "array", title: "Business", items: { type: "string", default: "deposit"}},
        business: { type: "string", title: "Business", default: "" },
        start_time: { type: "integer", title: "Start Time", default: 0 },
        end_time: { type: "integer", title: "End Time", default: 0 },
        offset: { type: "integer", title: "Offset", default: 0 },
        limit: { type: "integer", title: "Limit", default: 50 }
    }
};

exports = {
    ws_auth_schema,
    ws_sign_schema,
    ws_kline_query_schema,
    ws_kline_subscribe_schema,
    ws_price_query_schema,
    ws_today_query_schema,
    ws_today_subscribe_schema,
    ws_deals_query_schema,
    ws_depth_query_schema,
    ws_depth_subscribe_schema,
    ws_order_query_schema,
    ws_order_history_schema,
    ws_asset_history_schema

}