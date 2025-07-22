import { APIGatewayProxyEventV2 } from "aws-lambda";
import { Turbopuffer } from "@turbopuffer/turbopuffer";

export const handler = async (
    event: APIGatewayProxyEventV2,
): Promise<object> => {
    console.log(event);

    const tpuf = new Turbopuffer({
        region: "aws-us-east-1",
        apiKey: "tpuf_ignored",
    });
    await tpuf.namespace("nikhil").write({
        upsert_rows: [
            {
                id: 1,
                name: "nikhil",
                age: 30,
            },
        ],
    });

    return {
        statusCode: 418,
        body: "I'm a teapot",
    };
}
