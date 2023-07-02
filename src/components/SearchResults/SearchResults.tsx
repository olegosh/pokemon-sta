import React from 'react'
import { Box, Text, UnorderedList } from "@chakra-ui/react"
import { Fragment } from "react"
import { PokemonNameDetails } from "../../types"
import { ListItemResults } from "../ListItemResults"

type SearchResultsProps = {
    data: PokemonNameDetails[]
    searchValue: string
    handleClick: (name: string) => void
}

export const SearchResults: React.FC<SearchResultsProps> = ({ data, searchValue, handleClick }) => {
    const filteredPokemons = data.filter((data) => data !== undefined).flat().filter(({ name }) => name.includes(searchValue)) || []

    return (
        <Fragment>
            {!filteredPokemons.length ? <Text marginTop="12px" color="orange.500">Nothing found</Text> : null}
            {filteredPokemons.length
            ? (
                <Box>
                    <Text color="green.500" fontSize="11px">Click on the Pokemon`s name to see more details:</Text>
                    <UnorderedList listStyleType="none" marginTop="12px" marginLeft="0px" data-testid="list" display="flex" flexDirection="row" flexWrap="wrap" gap="5px" justifyContent="space-around" mb="64px">
                        {filteredPokemons.map(({ name, is_legendary, is_mythical, id, generation_id }) => (
                            <ListItemResults
                                key={`${id}_${generation_id}_${name}`}
                                id={id}
                                is_legendary={is_legendary}
                                is_mythical={is_mythical}
                                name={name}
                                handleListItemClick={handleClick}
                            />
                        ))}
                    </UnorderedList>
                </Box>
            )
            : null}
        </Fragment>
    )
}
