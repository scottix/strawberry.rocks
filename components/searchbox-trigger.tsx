"use client";

import { SearchBoxTrigger as SearchBoxTriggerComponent } from "@strawberry-graphql/styleguide";

import { useRouter } from "next/navigation";

export const SearchBoxTrigger = ({
  triggerOnly,
}: {
  triggerOnly?: boolean;
}) => {
  const router = useRouter();

  const onChange = (value: string) => {
    router.push(value);
  };

  const onActiveOptionChange = (value: string | null) => {
    if (value) {
      router.prefetch(value);
    }
  };

  return (
    <SearchBoxTriggerComponent
      onChange={onChange}
      onActiveOptionChange={onActiveOptionChange}
      triggerOnly={triggerOnly}
    />
  );
};
