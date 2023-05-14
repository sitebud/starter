import {DataFieldConfig} from '@sitebud/sdk-lib';
import {metaRobots} from './common/metaRobots';

export const pageFields: Record<string, DataFieldConfig> = {
    metaRobots: {...metaRobots, indexNumber: 1},
};
