import reducer from "./auth";
import * as actionTypes from "../actions/index";

describe("auth reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            tokenId: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/",
        });
    });

    it("should store the token upon login", () => {
        expect(
            reducer(
                {
                    tokenId: null,
                    userId: null,
                    error: null,
                    loading: false,
                    authRedirectPath: "/",
                },
                {
                    type: actionTypes.AUTH_SUCCESS,
                    tokenId: "some-token",
                    userId: "some user-id",
                }
            )
        ).toEqual({
            tokenId: "some-token",
            userId: "some user-id",
            error: null,
            loading: false,
            authRedirectPath: "/",
        });
    });
});
