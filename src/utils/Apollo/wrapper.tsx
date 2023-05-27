'use client';

import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    SuspenseCache,
} from '@apollo/client';
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_POKEMON_GQL,
    });

    return new ApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    });
}

function makeSuspenseCache() {
    return new SuspenseCache();
}

const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
    return (
        <ApolloNextAppProvider
            makeClient={makeClient}
            makeSuspenseCache={makeSuspenseCache}
        >
            {children}
        </ApolloNextAppProvider>
    );
};

export default ApolloWrapper;
